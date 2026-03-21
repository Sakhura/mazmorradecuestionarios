window.questions_matlab = [
  {
    question: "¿Para qué se usa MATLAB?",
    options: [
      "Computación numérica, álgebra matricial, simulación y visualización; muy usado en ingeniería y ciencias",
      "Desarrollo de apps móviles",
      "Desarrollo web",
      "Programación de sistemas"
    ],
    correct: 0,
    difficulty: "E",
    explanation: "MATLAB (Matrix Laboratory) es estándar en ingeniería, procesamiento de señales, control, estadística y prototipado de algoritmos."
  },
  {
    question: "¿Qué es una matriz en MATLAB?",
    options: [
      "La estructura de datos fundamental; A = [1 2 3; 4 5 6] crea matriz 2x3; todo en MATLAB es una matriz",
      "Solo un array",
      "Un array de números",
      "Solo para álgebra lineal"
    ],
    correct: 0,
    difficulty: "E",
    explanation: "En MATLAB todo es matriz. Un escalar es 1x1, vector fila es 1xN, vector columna Nx1. Las operaciones son matriciales por defecto."
  },
  {
    question: "¿Cómo se crea un rango en MATLAB?",
    options: [
      "linspace solo",
      "range(1,10)",
      "[1,2,...,10]",
      "1:10 o 1:0.5:10 (inicio:paso:fin)"
    ],
    correct: 3,
    difficulty: "E",
    explanation: "1:5 = [1 2 3 4 5]. 0:0.1:1 = [0 0.1 0.2 ... 1.0]. linspace(0,1,11) equivalente. Usados masivamente para indexación."
  },
  {
    question: "¿Qué hace el operador punto (.)?",
    options: [
      "Un separador decimal",
      "Solo para structs",
      "Convierte operaciones matriciales en element-wise: A.*B multiplicación elemento a elemento vs A*B multiplicación matricial",
      "Acceso a struct field"
    ],
    correct: 2,
    difficulty: "E",
    explanation: "A*B: multiplicación matricial. A.*B: elemento a elemento. A.^2: cuadrado de cada elemento. A./B: división elemento a elemento."
  },
  {
    question: "¿Qué hace <code>size(A)</code>?",
    options: [
      "Retorna [filas, columnas]: [m,n] = size(A); también size(A,1) solo filas",
      "La dimensión máxima",
      "El tamaño en bytes",
      "Solo para vectores"
    ],
    correct: 0,
    difficulty: "E",
    explanation: "size(A) retorna [rows cols]. size(A,1)=filas, size(A,2)=columnas. length(A)=max(size(A)). numel(A)=total de elementos."
  },
  {
    question: "¿Qué hace <code>zeros</code> y <code>ones</code>?",
    options: [
      "Funciones lógicas",
      "Solo para vectores",
      "Inicializan variables a 0 o 1",
      "Crean matrices de ceros o unos: zeros(3,4) → 3x4 de ceros; ones(n) → nxn de unos"
    ],
    correct: 3,
    difficulty: "E",
    explanation: "A = zeros(100,100); para pre-alocar memoria. eye(n) crea matriz identidad nxn. rand(m,n) matriz aleatoria uniforme."
  },
  {
    question: "¿Qué es el colon como índice <code>:</code>?",
    options: [
      "Selecciona todas las filas o columnas: A(:,2) segunda columna; A(1,:) primera fila; A(:) todos los elementos como columna",
      "Un rango de 1 a 10",
      "Solo para vectores",
      "Un separador"
    ],
    correct: 0,
    difficulty: "E",
    explanation: "A(:,end) última columna. A(2:4, 1:3) submatriz. A(:) vectoriza A. Reshape: reshape(A, m, n)."
  },
  {
    question: "¿Qué hace <code>plot(x, y)</code>?",
    options: [
      "Crea gráfico 2D de y vs x; hold on para múltiples líneas; xlabel, ylabel, title para labels",
      "Traza un plano 3D",
      "Solo puntos discretos",
      "Crea una tabla"
    ],
    correct: 0,
    difficulty: "E",
    explanation: "plot(x, y, 'r--o') línea roja discontinua con marcadores. hold on; plot(x2, y2). subplot(m,n,p) para múltiples gráficos."
  },
  {
    question: "¿Qué es un cell array?",
    options: [
      "Un tipo de struct",
      "Una celda de memoria",
      "Un array de objetos",
      "Array heterogéneo que puede contener datos de tipos distintos: C = {1, 'hola', [1 2 3]}; acceso con llaves {}"
    ],
    correct: 3,
    difficulty: "E",
    explanation: "C{1}=1, C{2}='hola'. C{end} último elemento. cell(m,n) crea cell array vacío. Útil para datos mixtos y strings de distinta longitud."
  },
  {
    question: "¿Qué es un struct en MATLAB?",
    options: [
      "Tipo de dato con campos nombrados: s.nombre = 'Ana'; s.edad = 30; o struct('nombre','Ana','edad',30)",
      "Una estructura de control",
      "Un tipo de función",
      "Un módulo de MATLAB"
    ],
    correct: 0,
    difficulty: "E",
    explanation: "s.x = 1; s.y = 2. fieldnames(s) lista los campos. rmfield(s,'x') elimina campo. Arrays de structs: s(1).x, s(2).x."
  },
  {
    question: "¿Qué es el comando <code>clc</code>?",
    options: [
      "Limpia la Command Window; clear limpia variables del workspace; close all cierra figuras",
      "Cierra MATLAB",
      "Limpia las variables",
      "Compila el código"
    ],
    correct: 0,
    difficulty: "D",
    explanation: "clc: limpia la consola. clear: elimina variables. clear A elimina solo A. close all: cierra todas las figuras. clearvars -except guarda variables específicas."
  },
  {
    question: "¿Qué hace <code>fprintf</code>?",
    options: [
      "Solo para archivos",
      "Es igual que disp",
      "Imprime texto formateado: fprintf('Valor: %d\\n', x); similar a C printf pero escribe a la consola o archivo",
      "Formatea figuras"
    ],
    correct: 2,
    difficulty: "D",
    explanation: "fprintf('%s tiene %d años\\n', nombre, edad). fid = fopen('file.txt','w'); fprintf(fid, ...). disp() es más simple sin formato."
  },
  {
    question: "¿Qué es la vectorización en MATLAB?",
    options: [
      "Un tipo de optimización manual",
      "Reemplazar loops con operaciones matriciales/vectoriales; mucho más rápido en MATLAB: sum(A.^2) vs loop",
      "Solo para sumas",
      "Crear vectores"
    ],
    correct: 1,
    difficulty: "D",
    explanation: "Evitar loops en MATLAB cuando es posible: x = 1:1000; y = x.^2; es 100x más rápido que un loop. El JIT moderno de MATLAB mejora esto pero la vectorización sigue siendo preferida."
  },
  {
    question: "¿Qué hace <code>fft()</code>?",
    options: [
      "Fast Fourier Transform: transforma señal del dominio tiempo al dominio frecuencia",
      "Solo para señales de audio",
      "Filtra una señal",
      "Crea un archivo"
    ],
    correct: 0,
    difficulty: "D",
    explanation: "Y = fft(x). f = (0:N-1)*(Fs/N). plot(f, abs(Y)). ifft() para la transformada inversa. fft2() para imágenes."
  },
  {
    question: "¿Qué es Simulink?",
    options: [
      "Un tipo de script",
      "Un tipo de figura",
      "Solo para circuitos",
      "Entorno gráfico de modelado y simulación de sistemas dinámicos; integrado con MATLAB; diagramas de bloques"
    ],
    correct: 3,
    difficulty: "D",
    explanation: "Simulink permite modelar sistemas con bloques visuales (integradores, sumas, transferencias). Genera código C para implementación embebida con Embedded Coder."
  },
  {
    question: "¿Qué hace <code>cellfun</code>?",
    options: [
      "Aplica una función a cada elemento de un cell array: cellfun(@length, C) retorna longitudes",
      "Es igual que arrayfun",
      "Crea una cell function",
      "Convierte células a array"
    ],
    correct: 0,
    difficulty: "D",
    explanation: "cellfun(@(x) x^2, {1,2,3,4}) = {1,4,9,16}. 'UniformOutput', false si los resultados tienen tamaños diferentes."
  },
  {
    question: "¿Qué es Parallel Computing Toolbox?",
    options: [
      "Solo para clusters",
      "Solo para servidores",
      "Permite paralelismo: parfor loops, spmd, parfeval; distribuye trabajo entre cores del CPU o GPUs",
      "Un tipo de toolbox de red"
    ],
    correct: 2,
    difficulty: "C",
    explanation: "parpool(4) abre pool de 4 workers. parfor i = 1:1000 ejecuta iteraciones en paralelo. gpuArray para computación en GPU. parfeval para async."
  },
  {
    question: "¿Qué es <code>bsxfun</code> vs operaciones broadcast?",
    options: [
      "bsxfun aplica función con broadcasting (pre-R2016b); ahora R2016b+ tiene broadcasting implícito: A + b donde b es compatible",
      "Una función de sets",
      "Una función de bits",
      "Solo para enteros"
    ],
    correct: 0,
    difficulty: "C",
    explanation: "A + [1;2;3] hace broadcasting automático en MATLAB moderno. bsxfun(@plus, A, b) es la forma antigua."
  },
  {
    question: "¿Qué es el profiler de MATLAB?",
    options: [
      "Solo para figuras",
      "profile on; código; profile viewer — muestra qué líneas consumen más tiempo para optimización",
      "Un analizador de perfiles de seguridad",
      "Un tipo de debugger"
    ],
    correct: 1,
    difficulty: "C",
    explanation: "El profiler muestra tiempo por función y línea. Junto con el Memory Profiler, identifica cuellos de botella. tic/toc para medir tiempos específicos."
  },
  {
    question: "¿Qué es Octave en relación a MATLAB?",
    options: [
      "Una versión de MATLAB",
      "Una nota musical",
      "Implementación open-source compatible con MATLAB; no tiene Simulink ni todas las Toolboxes pero es gratuito",
      "Un lenguaje diferente"
    ],
    correct: 2,
    difficulty: "C",
    explanation: "GNU Octave es compatible con la mayoría del código MATLAB. Diferencias en OOP, GUI y algunas funciones avanzadas. Útil para aprendizaje y aplicaciones abiertas."
  }
];
