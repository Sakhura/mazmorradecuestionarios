window.questions_matlab = [
  {
    question: "¿Para qué se usa MATLAB?",
    options: [
      "Computación numérica, álgebra matricial, simulación y visualización; muy usado en ingeniería y ciencias",
      "Desarrollo de aplicaciones web de alto rendimiento con soporte nativo de concurrencia en servidor",
      "Programación de sistemas embebidos de bajo nivel con acceso directo al hardware del microcontrolador",
      "Gestión de bases de datos relacionales con soporte nativo para consultas SQL y transacciones ACID"
    ],
    correct: 0,
    difficulty: "E",
    explanation: "MATLAB (Matrix Laboratory) es estándar en ingeniería, procesamiento de señales, control, visión artificial y finanzas. Tiene toolboxes especializadas para cada área."
  },
  {
    question: "¿Qué es una matriz en MATLAB?",
    options: [
      "La estructura de datos fundamental; A = [1 2 3; 4 5 6] crea matriz 2x3; todo en MATLAB es una matriz",
      "Un tipo de dato especial solo para números complejos que extiende el tipo double estándar de MATLAB",
      "Un array bidimensional que solo acepta datos de tipo numérico entero con alineación de 8 bytes en memoria",
      "Una estructura similar al struct de C que agrupa variables de diferentes tipos con acceso por nombre de campo"
    ],
    correct: 0,
    difficulty: "E",
    explanation: "En MATLAB todo es matriz. Un escalar es 1x1, vector fila es 1xN, vector columna Nx1. Las operaciones de álgebra lineal son primitivas del lenguaje: A*b, A\\b, inv(A)."
  },
  {
    question: "¿Cómo se crea un rango en MATLAB?",
    options: [
      "range(1, 10) o range(1, 0.5, 10) con la función range() que retorna un vector columna con los valores",
      "seq(from=1, to=10) o seq(1, 10, by=0.5) usando la función seq() heredada de la interfaz R de MATLAB",
      "for i = 1:10 solo dentro de bucles; los rangos no pueden asignarse como vectores directamente en MATLAB",
      "1:10 o 1:0.5:10 (inicio:paso:fin) y linspace(inicio, fin, n) para n puntos uniformemente distribuidos"
    ],
    correct: 3,
    difficulty: "E",
    explanation: "1:5 = [1 2 3 4 5]. 0:0.1:1 = [0 0.1 0.2 ... 1.0]. linspace(0,1,11) equivale a 0:0.1:1. El rango es un tipo nativo que se expande al acceder a sus elementos."
  },
  {
    question: "¿Qué hace el operador punto (.) en MATLAB?",
    options: [
      "Accede a los campos de un struct: s.campo — es el operador de acceso a propiedades de estructuras de datos",
      "Convierte operaciones matriciales en element-wise: A.*B multiplicación elemento a elemento vs A*B matricial",
      "Concatena el nombre de una función con su módulo: math.sin(x) accede a la función sin del módulo math",
      "Indica precisión decimal en constantes numéricas literales como 3.14 o 2.718 en el código fuente"
    ],
    correct: 1,
    difficulty: "E",
    explanation: "A*B: multiplicación matricial. A.*B: elemento a elemento. A.^2: cuadrado de cada elemento. A./B: división elemento a elemento. El . hace que la operación sea componentwise."
  },
  {
    question: "¿Qué hace size(A) en MATLAB?",
    options: [
      "Retorna [filas, columnas]: [m,n] = size(A); también size(A,1) solo filas, size(A,2) solo columnas",
      "Retorna el número total de bytes que ocupa la matriz A en memoria incluyendo el overhead del objeto",
      "Retorna el tipo de dato de los elementos de A como string: 'double', 'single', 'int32', etc.",
      "Retorna 1 si A es un escalar, 2 si es un vector, y 3 si es una matriz de dos o más dimensiones"
    ],
    correct: 0,
    difficulty: "E",
    explanation: "size(A) retorna [rows cols]. size(A,1)=filas, size(A,2)=columnas. length(A)=max(size(A)). numel(A) número total de elementos. ndims(A) número de dimensiones."
  },
  {
    question: "¿Qué hacen zeros() y ones() en MATLAB?",
    options: [
      "Crean vectores de índices que apuntan a los elementos con valor cero o uno en una matriz existente A",
      "Inicializan todas las variables del workspace actual a cero o a uno respectivamente para reset del estado",
      "Generan matrices de identidad multiplicadas por 0 o por 1 para compatibilidad con álgebra simbólica",
      "Crean matrices de ceros o unos: zeros(3,4) → 3x4 de ceros; ones(n) → nxn de unos; útil para pre-alocar"
    ],
    correct: 3,
    difficulty: "E",
    explanation: "A = zeros(100,100); para pre-alocar memoria. eye(n) crea matriz identidad. rand(m,n) números aleatorios uniformes. randn(m,n) distribución normal estándar."
  },
  {
    question: "¿Qué hace el operador : como índice en MATLAB?",
    options: [
      "Define un rango de índices para slicing: solo válido en la forma inicio:fin sin soporte para paso diferente de 1",
      "Es un operador de rango que solo funciona en el contexto de bucles for, no para indexación de arrays",
      "Convierte la matriz en vector columna cuando se usa solo: A(:) aplana A pero no permite selección de filas",
      "Selecciona todas las filas o columnas: A(:,2) segunda columna; A(1,:) primera fila; A(:) todos los elementos como columna"
    ],
    correct: 3,
    difficulty: "E",
    explanation: "A(:,end) última columna. A(2:4, 1:3) submatriz. A(:) vectoriza A. Reshape con reshape(A,m,n). La indexación lógica: A(A>0) selecciona todos los positivos."
  },
  {
    question: "¿Qué hace plot(x, y) en MATLAB?",
    options: [
      "Almacena los datos x e y en una figura pendiente que se mostrará al ejecutar el comando show() o display()",
      "Crea un gráfico 3D de la superficie y como función de x usando triangulación de Delaunay automáticamente",
      "Genera un gráfico de barras apiladas donde x son las categorías e y son los valores de cada barra del gráfico",
      "Crea gráfico 2D de y vs x; hold on para múltiples líneas; xlabel, ylabel, title para etiquetas"
    ],
    correct: 3,
    difficulty: "E",
    explanation: "plot(x, y, 'r--o') línea roja discontinua con marcadores. hold on; plot(x2, y2) añade otra línea. legend, grid on. figure() abre nueva ventana. saveas(gcf, 'plot.png') guarda."
  },
  {
    question: "¿Qué es un cell array en MATLAB?",
    options: [
      "Una matriz que solo puede contener números enteros de un byte (int8) con acceso eficiente por índice numérico",
      "Un tipo de array de solo lectura que el compilador JIT de MATLAB optimiza para acceso secuencial rápido",
      "Una estructura de datos para almacenar cadenas de texto con longitud variable y codificación UTF-16 automática",
      "Array heterogéneo que puede contener datos de tipos distintos: C = {1, 'hola', [1 2 3]}; acceso con llaves {}"
    ],
    correct: 3,
    difficulty: "E",
    explanation: "C{1}=1, C{2}='hola'. C{end} último elemento. cell(m,n) crea cell array vacío. cellfun aplica función a cada celda. Útil para listas de strings de longitud variable."
  },
  {
    question: "¿Qué es un struct en MATLAB?",
    options: [
      "Una clase Java que MATLAB importa automáticamente para manejar estructuras de datos complejas en el workspace",
      "Una tabla de base de datos en memoria con filas y columnas que permite consultas por nombre de campo con SQL",
      "Tipo de dato con campos nombrados: s.nombre = 'Ana'; s.edad = 30; o struct('nombre','Ana','edad',30)",
      "Una variable especial del workspace que MATLAB crea automáticamente para almacenar los parámetros de la función"
    ],
    correct: 2,
    difficulty: "E",
    explanation: "s.x = 1; s.y = 2. fieldnames(s) lista los campos. rmfield(s,'x') elimina campo. isfield(s,'x') verifica. Los struct arrays: s(i).campo para vectores de structs."
  },
  {
    question: "¿Qué hacen clc, clear y close all en MATLAB?",
    options: [
      "clc cierra la aplicación MATLAB; clear elimina el historial de comandos; close all guarda el workspace actual",
      "clc compila el código actual; clear limpia la caché del compilador JIT; close all cierra las conexiones de red",
      "clc limpia la Command Window; clear limpia variables del workspace; close all cierra todas las figuras abiertas",
      "Son alias equivalentes del mismo comando que reinicia MATLAB al estado inicial borrando todo el entorno activo"
    ],
    correct: 2,
    difficulty: "D",
    explanation: "clc: limpia la consola. clear: elimina variables. clear A elimina solo A. close all: cierra todas las figuras. Combinados al inicio del script para asegurar un estado limpio."
  },
  {
    question: "¿Qué hace fprintf en MATLAB?",
    options: [
      "Genera un archivo de texto formateado con los valores del workspace en el directorio actual del proyecto",
      "Evalúa una expresión de formato y muestra el resultado en la variable de respuesta ans del workspace",
      "Imprime texto formateado: fprintf('Valor: %d\\n', x); similar a C printf; escribe a consola o archivo",
      "Formatea una matriz como tabla HTML para visualización en el navegador web de MATLAB Online directamente"
    ],
    correct: 2,
    difficulty: "D",
    explanation: "fprintf('%s tiene %d años\\n', nombre, edad). fid = fopen('file.txt','w'); fprintf(fid, '...'); fclose(fid). Para output a la consola, fid=1 (stdout) es el valor por defecto."
  },
  {
    question: "¿Qué es la vectorización en MATLAB?",
    options: [
      "La conversión de código MATLAB a código C usando el MATLAB Coder para maximizar la velocidad de ejecución",
      "Reemplazar loops con operaciones matriciales/vectoriales; mucho más rápido en MATLAB: sum(A.^2) vs loop",
      "El proceso de optimización del JIT que convierte loops lentos en instrucciones SIMD del procesador automáticamente",
      "La técnica de paralelizar loops for usando el Parallel Computing Toolbox con la directiva parfor de MATLAB"
    ],
    correct: 1,
    difficulty: "D",
    explanation: "Evitar loops en MATLAB cuando es posible: x = 1:1000; y = x.^2; es 100x más rápido que un loop. MATLAB es interpretado; las operaciones matriciales usan BLAS/LAPACK optimizados."
  },
  {
    question: "¿Qué hace fft() en MATLAB?",
    options: [
      "Fast File Transfer: copia archivos de datos binarios usando transferencia optimizada con buffering automático",
      "Fixed-point Float Transform: convierte números de punto flotante a representación de punto fijo para hardware",
      "Fast Fourier Transform: transforma señal del dominio tiempo al dominio frecuencia para análisis espectral",
      "Full Feature Test: ejecuta un conjunto de tests de validación sobre la instalación de MATLAB y sus toolboxes"
    ],
    correct: 2,
    difficulty: "D",
    explanation: "Y = fft(x). f = (0:N-1)*(Fs/N). plot(f, abs(Y)). ifft() para la transformada inversa. fftshift() centra la frecuencia cero. Fundamental en procesamiento de señales y análisis de audio."
  },
  {
    question: "¿Qué es Simulink?",
    options: [
      "Un simulador de redes de computadoras que MATLAB usa para modelar protocolos TCP/IP y calcular latencias",
      "Una herramienta de simulación de circuitos analógicos integrada con MATLAB para diseño de hardware electrónico",
      "Un entorno de scripting gráfico donde los nodos representan archivos y las aristas representan dependencias entre ellos",
      "Entorno gráfico de modelado y simulación de sistemas dinámicos; integrado con MATLAB; diagramas de bloques"
    ],
    correct: 3,
    difficulty: "D",
    explanation: "Simulink permite modelar sistemas con bloques visuales (integradores, ganancias, subsistemas, lógica). Muy usado en control automático, electrónica de potencia y sistemas de comunicación."
  },
  {
    question: "¿Qué hace cellfun en MATLAB?",
    options: [
      "Aplica una función a cada elemento de un cell array: cellfun(@length, C) retorna las longitudes de cada celda",
      "Convierte un cell array en una matriz numérica densa siempre que todos los elementos sean del mismo tipo",
      "Crea un nuevo cell array aplicando una función de filtrado booleano para seleccionar elementos que cumplan la condición",
      "Ordena los elementos de un cell array aplicando una función de comparación personalizada definida por el usuario"
    ],
    correct: 0,
    difficulty: "D",
    explanation: "cellfun(@(x) x^2, {1,2,3,4}) = {1,4,9,16}. 'UniformOutput', false si los outputs no son escalares. Más eficiente que un loop for sobre los elementos del cell array."
  },
  {
    question: "¿Qué es el Parallel Computing Toolbox?",
    options: [
      "Una herramienta que analiza el código MATLAB e identifica automáticamente las secciones paralelizables del programa",
      "Un compilador de ahead-of-time que genera binarios multiplataforma con soporte para ejecución en múltiples hilos",
      "Permite paralelismo: parfor loops, spmd, parfeval; distribuye trabajo entre cores del CPU o GPUs con gpuArray",
      "Una librería de comunicación MPI que conecta múltiples instancias de MATLAB en un cluster HPC distribuido"
    ],
    correct: 2,
    difficulty: "C",
    explanation: "parpool(4) abre pool de 4 workers. parfor i = 1:1000 ejecuta iteraciones en paralelo. gpuArray(A) transfiere a GPU. parfeval para tareas asíncronas. Requiere licencia adicional."
  },
  {
    question: "¿Qué es el broadcasting implícito en MATLAB (R2016b+)?",
    options: [
      "Una característica que transmite warnings y errores de forma automática a todos los archivos de log del sistema",
      "Un mecanismo que propaga los cambios de variables del workspace a todos los scripts abiertos en el editor",
      "La capacidad de MATLAB para expandir automáticamente dimensiones de tamaño 1 en operaciones entre matrices de tamaños compatibles",
      "Un sistema de distribución de tareas que transmite bloques de datos a los workers del Parallel Computing Toolbox"
    ],
    correct: 2,
    difficulty: "C",
    explanation: "A + [1;2;3] hace broadcasting automático en MATLAB moderno. Antes se necesitaba bsxfun(@plus, A, b). Las dimensiones deben ser compatibles: iguales o igual a 1 en cada dimensión."
  },
  {
    question: "¿Cómo se usa el profiler de MATLAB?",
    options: [
      "profile list: muestra las funciones instaladas; profile start: inicia la monitorización del workspace activo",
      "profile on; código; profile viewer — muestra qué líneas consumen más tiempo para optimización del código",
      "profile('cpu'): analiza el uso de CPU; profile('memory'): analiza uso de RAM; se activa desde Preferences",
      "El profiler solo es accesible desde el menú Debug de la interfaz gráfica de MATLAB, no desde la línea de comandos"
    ],
    correct: 1,
    difficulty: "C",
    explanation: "El profiler muestra tiempo por función y línea. Junto con el Memory Profiler identifica cuellos de botella. profile viewer abre la interfaz visual con flamegraph del tiempo de ejecución."
  },
  {
    question: "¿Qué es GNU Octave en relación a MATLAB?",
    options: [
      "Un plugin oficial de MathWorks que añade soporte para computación cuántica a la versión estándar de MATLAB",
      "Una versión educativa de MATLAB con licencia gratuita para estudiantes pero con funcionalidad reducida al 30%",
      "Implementación open-source compatible con MATLAB; no tiene Simulink ni todas las Toolboxes pero es gratuito",
      "Un subconjunto de MATLAB orientado a procesamiento de audio y señales digitales disponible en Linux únicamente"
    ],
    correct: 2,
    difficulty: "C",
    explanation: "GNU Octave es compatible con la mayoría del código MATLAB. Diferencias: algunas funciones avanzadas, Simulink, toolboxes propietarias no disponibles. Ideal para aprendizaje sin coste."
  }
];
