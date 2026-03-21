window.questions_r = [
  {
    question: "¿Para qué se usa principalmente R?",
    options: [
      "Programación de sistemas de bajo nivel con acceso directo a memoria y llamadas al kernel del sistema operativo",
      "Desarrollo de aplicaciones móviles nativas con compilación AOT para iOS y Android con soporte de UI declarativa",
      "Análisis estadístico, visualización de datos, machine learning; lenguaje preferido en ciencias y data science",
      "Desarrollo web backend con soporte nativo de websockets y APIs REST de alto rendimiento en tiempo real"
    ],
    correct: 2,
    difficulty: "E",
    explanation: "R fue creado por estadísticos para estadísticos. CRAN tiene miles de paquetes especializados. Es el estándar en bioinformática, econometría, epidemiología y ciencia de datos académica."
  },
  {
    question: "¿Cuál es el operador de asignación principal en R?",
    options: [
      "= es el único operador de asignación en R; el operador <- es solo válido en el contexto de funciones anónimas",
      "x <- 5 (operador flecha); también se puede usar = pero <- es el estilo idiomático en R",
      "assign('x', 5) es la forma correcta; los operadores <- y = solo funcionan en el entorno global de R",
      ":= es el operador de asignación inmutable; <- se usa solo para reasignación de variables existentes en el scope"
    ],
    correct: 1,
    difficulty: "E",
    explanation: "El operador <- es idiomático en R aunque = también funciona. -> asigna al revés: 5 -> x. <<- asigna en el entorno padre (útil en closures). La convención de la comunidad prefiere <-."
  },
  {
    question: "¿Cómo se crea un vector en R?",
    options: [
      "v = [1, 2, 3, 4, 5] usando corchetes como en Python; R hereda la notación de listas de Python para compatibilidad",
      "vector(1, 2, 3, 4, 5) con la función vector() que crea una secuencia de elementos del mismo tipo en R",
      "array(1:5) usando la función array() que crea vectores unidimensionales; c() es solo para concatenar vectores",
      "c(1, 2, 3, 4, 5) usando la función c() (combine); los vectores son la estructura de datos básica de R"
    ],
    correct: 3,
    difficulty: "E",
    explanation: "c() combina valores en un vector. 1:5 crea secuencia. seq(1, 10, by=2). rep(0, 5) repite. Los vectores en R son homogéneos; si mezclas tipos, R coerciona al más general."
  },
  {
    question: "¿Qué hace la función c() en R?",
    options: [
      "Calcula la longitud de un objeto; es equivalente a length() pero más eficiente para vectores atómicos largos",
      "Convierte cualquier objeto R a tipo carácter; es la abreviatura de as.character() para coerciones frecuentes",
      "Crea una copia profunda de un objeto R preservando sus atributos y clase sin compartir memoria con el original",
      "Combina/concatena valores en un vector: c(1,2,3) o c(v1, v2) para unir vectores existentes en uno nuevo"
    ],
    correct: 3,
    difficulty: "E",
    explanation: "c(1, 'a', TRUE) coerciona todo a character. c(list1, list2) concatena listas. NULL aplana estructuras anidadas. Es la función más fundamental para crear estructuras de datos en R."
  },
  {
    question: "¿Qué es un data.frame en R?",
    options: [
      "Una matriz numérica bidimensional de tipo double que R usa internamente para operaciones de álgebra lineal",
      "Un tipo de lista especial donde todos los elementos son vectores de la misma longitud; similar a una tabla SQL",
      "Una clase S4 de R que extiende matrix() con soporte de tipos mixtos y validación automática de esquema",
      "Un objeto de solo lectura que encapsula una consulta SQL diferida que se ejecuta al acceder a sus columnas"
    ],
    correct: 1,
    difficulty: "E",
    explanation: "data.frame(nombre=c('Ana','Bob'), edad=c(25,30)). df$columna o df[,'col'] para acceder. nrow(), ncol(). Es la estructura tabular principal de R, equivalente a un DataFrame de pandas."
  },
  {
    question: "¿Qué hace summary() en R?",
    options: [
      "Genera documentación HTML del objeto en formato Roxygen2 con descripción de cada campo y su tipo de dato",
      "Muestra estadísticas descriptivas: mínimo, Q1, mediana, media, Q3, máximo para vectores numéricos y data.frames",
      "Crea un resumen comprimido del objeto usando algoritmos de compresión para reducir el uso de memoria del proceso",
      "Imprime los primeros 6 elementos de cada columna de un data.frame, equivalente a head() pero más detallado"
    ],
    correct: 1,
    difficulty: "E",
    explanation: "summary(df) muestra estadísticas por columna. Para factores, cuenta frecuencias. summary(model) para modelos lineales muestra coeficientes y p-values. Es el comando de exploración más básico."
  },
  {
    question: "¿Cómo se instala y carga un paquete en R?",
    options: [
      "pip install paquete en terminal, luego import paquete en R; R usa el mismo gestor de paquetes que Python",
      "install(paquete) para instalar desde CRAN; load(paquete) para cargarlo en la sesión activa de R",
      "pkg add paquete en la consola de R; using paquete para importar sus funciones al namespace global",
      "install.packages('ggplot2') para instalar desde CRAN; library(ggplot2) para cargarlo en la sesión actual"
    ],
    correct: 3,
    difficulty: "E",
    explanation: "install.packages() descarga de CRAN. library() o require() para cargar. require() retorna FALSE en vez de error si no está instalado. BiocManager::install() para paquetes de Bioconductor."
  },
  {
    question: "¿Cómo se calcula la media en R?",
    options: [
      "average(x) es la función estándar de R para calcular la media aritmética de un vector numérico cualquiera",
      "sum(x) / count(x) es la única forma correcta; R no tiene función nativa para calcular medias directamente",
      "mean(x); na.rm=TRUE para ignorar NA: mean(x, na.rm=TRUE); también median(), sd(), var() para otras estadísticas",
      "arithmetic_mean(x) es la función de R; mean() es un alias obsoleto de versiones anteriores al R 2.0"
    ],
    correct: 2,
    difficulty: "E",
    explanation: "mean(c(1,2,3,NA)) retorna NA. mean(c(1,2,3,NA), na.rm=TRUE) retorna 2. median() para la mediana. sd() para desviación estándar. weighted.mean(x, w) para media ponderada."
  },
  {
    question: "¿Qué son los NA en R?",
    options: [
      "Valores enteros especiales equivalentes al NaN de IEEE 754; se propagan en todas las operaciones aritméticas",
      "Variables no asignadas que R inicializa automáticamente a 0 para evitar errores de variable no definida",
      "Valores lógicos FALSE almacenados como enteros para compatibilidad con código C que usa convenciones 0/1",
      "Not Available: valores faltantes en datos; se propagan en operaciones; is.na() para detectarlos; na.rm para ignorarlos"
    ],
    correct: 3,
    difficulty: "E",
    explanation: "NA es diferente de NULL, NaN e Inf. NA_integer_, NA_real_, NA_character_ son tipos específicos. is.na() detecta. na.omit() elimina filas con NA. El manejo de missing values es central en R."
  },
  {
    question: "¿Qué hace which() en R?",
    options: [
      "Compara dos vectores elemento a elemento y retorna un vector lógico con TRUE donde son iguales entre sí",
      "Aplica una condición a un data.frame y filtra las filas que cumplen el predicado, similar a dplyr::filter()",
      "Retorna los índices donde una condición es TRUE: which(x > 0) da las posiciones de los elementos positivos",
      "Selecciona aleatoriamente un elemento de un vector usando pesos de probabilidad especificados por el usuario"
    ],
    correct: 2,
    difficulty: "D",
    explanation: "which(c(TRUE, FALSE, TRUE)) retorna c(1, 3). which.min(x) y which.max(x) dan el índice del mínimo/máximo. Muy útil para indexación condicional sin usar dplyr en código base R."
  },
  {
    question: "¿Qué es ggplot2?",
    options: [
      "Un sistema de visualización 3D interactivo basado en WebGL que genera gráficos exportables a HTML desde R",
      "El sistema de gráficos base de R incluido por defecto; el '2' indica que es la segunda versión del motor gráfico",
      "Una librería de gráficos estadísticos que usa gramática de gráficos (Grammar of Graphics) para visualizaciones elegantes",
      "Un frontend gráfico de RStudio que permite crear gráficos arrastrando variables a canales de codificación visual"
    ],
    correct: 2,
    difficulty: "E",
    explanation: "ggplot(data, aes(x, y)) + geom_point() + geom_line(). Capas: geom_, stat_, scale_, theme_. La Grammar of Graphics de Wilkinson es su base teórica. Es el estándar de visualización en R moderno."
  },
  {
    question: "¿Qué es el operador pipe %>% en R?",
    options: [
      "Un operador de concatenación de strings que une vectores de caracteres de izquierda a derecha con separador vacío",
      "Un operador matemático de convolución que aplica una función de kernel a un vector señal en el dominio del tiempo",
      "Pasa el resultado de la izquierda como primer argumento de la función derecha: x %>% f() equivale a f(x)",
      "Un operador de redireccionamiento de output hacia archivos, heredado de la sintaxis de shell bash en R 4.0+"
    ],
    correct: 2,
    difficulty: "D",
    explanation: "library(magrittr) o dplyr. df %>% filter(age>18) %>% select(name) %>% head(). R 4.1+ tiene |> nativo. Hace el código más legible al evitar funciones anidadas f(g(h(x))) difíciles de leer."
  },
  {
    question: "¿Qué hace filter() de dplyr?",
    options: [
      "Aplica un filtro de paso bajo a señales numéricas usando convolución discreta para suavizado de series temporales",
      "Selecciona columnas de un data.frame por nombre; es el equivalente en dplyr de la indexación df[, cols] base R",
      "Ordena las filas de un data.frame por los valores de una o más columnas en orden ascendente o descendente",
      "Filtra filas de un data.frame según condiciones: filter(df, age > 18, country == 'ES') retorna filas que cumplen todo"
    ],
    correct: 3,
    difficulty: "D",
    explanation: "filter(df, score >= 90 | grade == 'A'). Equivalente base R: df[df$age > 18,]. Con múltiples condiciones se usa & (Y) y | (O). slice() para filtrar por posición numérica de fila."
  },
  {
    question: "¿Qué función de la familia apply aplica una función a filas o columnas de una matriz?",
    options: [
      "lapply(X, FUN) aplica FUN a filas con MARGIN=1 y a columnas con MARGIN=2 retornando siempre una lista",
      "sapply(X, FUN) simplifica el resultado automáticamente; cuando FUN retorna escalares devuelve una matriz",
      "vapply(X, FUN, FUN.VALUE) es la función apply para matrices con verificación estricta del tipo de retorno",
      "apply(X, MARGIN, FUN): MARGIN=1 para filas, MARGIN=2 para columnas; retorna vector o matriz con resultados"
    ],
    correct: 3,
    difficulty: "D",
    explanation: "apply(matrix, 1, sum) suma por filas. apply(matrix, 2, mean) media por columnas. lapply() para listas retornando lista. sapply() simplifica resultado. vapply() con tipo de retorno explícito."
  },
  {
    question: "¿Qué es tidyverse?",
    options: [
      "Un entorno de desarrollo integrado para R similar a RStudio pero orientado a ciencia de datos reproducible",
      "Un conjunto de paquetes con filosofía coherente para data science: dplyr, ggplot2, tidyr, readr, purrr, tibble",
      "El sistema de gestión de paquetes oficial de R que reemplazó a CRAN como repositorio principal desde 2019",
      "Un formato de datos tabulares estándar de R compatible con bases de datos SQL para análisis de big data"
    ],
    correct: 1,
    difficulty: "E",
    explanation: "library(tidyverse) carga dplyr, ggplot2, tidyr, readr, purrr, tibble, stringr, forcats. Diseñado por Hadley Wickham. Filosofía 'tidy data': cada variable es columna, cada observación es fila."
  },
  {
    question: "¿Qué hace pivot_longer() de tidyr?",
    options: [
      "Ordena un data.frame de mayor a menor por la columna especificada, creando un nuevo orden de filas persistente",
      "Amplía un data.frame añadiendo nuevas columnas calculadas a partir de las columnas existentes con expresiones",
      "Transforma columnas en filas (wide a long): útil para datos en formato ancho que deben estar en formato largo",
      "Extiende verticalmente dos data.frames con las mismas columnas, equivalente al UNION ALL de SQL en R"
    ],
    correct: 2,
    difficulty: "D",
    explanation: "pivot_longer(df, cols=c('Jan','Feb','Mar'), names_to='month', values_to='value'). Antes era gather(). pivot_wider() hace lo contrario (long a wide). Tidy data requiere formato largo para ggplot2."
  },
  {
    question: "¿Qué son las listas en R?",
    options: [
      "Vectores tipados que solo aceptan elementos del mismo tipo; similares a los arrays de C con gestión automática",
      "Colecciones de solo lectura creadas con list() que no permiten modificación una vez inicializadas en R",
      "Estructuras de datos exclusivas de R 4.0+ que reemplazaron a los vectores en operaciones de data science moderno",
      "Colecciones heterogéneas que pueden contener cualquier tipo de objeto incluyendo otras listas: list(1, 'a', TRUE, list())"
    ],
    correct: 3,
    difficulty: "D",
    explanation: "lst[[1]] accede por índice. lst$nombre accede por nombre. Las listas son la base de los data.frames. lapply/sapply para iterar. modifyList() para actualizar. Muy flexibles para estructuras complejas."
  },
  {
    question: "¿Qué hace lm() en R?",
    options: [
      "Calcula la longitud máxima de los elementos de una lista, retornando el número de caracteres del elemento más largo",
      "Ajusta un modelo de regresión lineal: lm(y ~ x, data=df); summary() para ver coeficientes y bondad de ajuste",
      "Crea una matrix triangular inferior (lower matrix) usada en factorizaciones de Cholesky para sistemas lineales",
      "Aplica transformación logarítmica a un modelo estadístico para linealizar relaciones exponenciales en los datos"
    ],
    correct: 1,
    difficulty: "D",
    explanation: "model <- lm(mpg ~ wt + hp, data=mtcars). summary(model) muestra R², p-values, residuos. predict(model, newdata) para predicciones. glm() para modelos lineales generalizados (logística, Poisson)."
  },
  {
    question: "¿Qué hace str() en R?",
    options: [
      "Convierte cualquier objeto R a string usando reglas de coerciones definidas en el sistema de tipos del lenguaje",
      "Calcula la longitud de una cadena de texto en bytes, equivalente a nchar() pero contando bytes en lugar de caracteres",
      "Muestra la estructura interna de un objeto: tipo, dimensiones, primeros valores; muy útil para explorar objetos complejos",
      "Aplica operaciones de manipulación de strings sobre un vector de caracteres usando expresiones regulares básicas"
    ],
    correct: 2,
    difficulty: "D",
    explanation: "str(df) muestra tipos de columnas y primeros valores. str(list) muestra la estructura anidada. Muy útil para entender objetos complejos rápidamente. class() y typeof() para el tipo específico."
  },
  {
    question: "¿Qué es purrr en R?",
    options: [
      "Un framework de pruebas unitarias para R que verifica automáticamente la pureza matemática de las funciones",
      "Un paquete de procesamiento de audio en R para análisis de señales con transformadas wavelet y FFT integrados",
      "Paquete para programación funcional: map(), map_dbl(), map_df() como alternativas tipadas a lapply/sapply",
      "Un sistema de caché de funciones puras que memoriza los resultados para evitar recómputo en llamadas repetidas"
    ],
    correct: 2,
    difficulty: "C",
    explanation: "map(list, función) retorna lista. map_dbl() retorna double. map_df() retorna data.frame. map2() para dos listas. pmap() para N listas. reduce() y accumulate() para operaciones acumulativas."
  },
  {
    question: "¿Qué es Shiny en R?",
    options: [
      "Un optimizador de código R que genera versiones compiladas de funciones lentas usando llamadas a C++ automáticamente",
      "Un framework para crear aplicaciones web interactivas directamente desde R sin necesitar JavaScript ni HTML",
      "Un IDE alternativo a RStudio para el desarrollo de paquetes R con integración continua y pruebas automáticas",
      "Un sistema de generación de reportes estáticos en PDF desde código R usando LaTeX como motor de renderizado"
    ],
    correct: 1,
    difficulty: "C",
    explanation: "ui <- fluidPage(sliderInput(), plotOutput()). server <- function(input,output){ output$plot <- renderPlot({...}) }. shinyApp(ui, server). Permite dashboards interactivos sin JavaScript."
  },
  {
    question: "¿Qué es la evaluación perezosa (lazy evaluation) en R?",
    options: [
      "Una estrategia de compilación donde R pospone la traducción a bytecode hasta que la función es llamada por primera vez",
      "Un modo de ahorro de energía del intérprete R que reduce la frecuencia del CPU cuando no hay operaciones activas",
      "Los argumentos de función se evalúan solo cuando se usan, no al llamar la función; permite expresiones como stop()",
      "Una técnica de carga diferida de paquetes que R usa para reducir el tiempo de inicio importando solo lo necesario"
    ],
    correct: 2,
    difficulty: "C",
    explanation: "f <- function(x, y = stop('y needed')) if(cond) x else y. Si cond es TRUE, y nunca se evalúa y el error no ocurre. promise: expresión + entorno que se evalúa al primer acceso. Base de NSE en R."
  },
  {
    question: "¿Qué es Rcpp?",
    options: [
      "El compilador cruzado oficial de R que genera binarios nativos para Windows, Linux y macOS simultáneamente",
      "Un paquete para leer y procesar archivos CSV grandes con parseo optimizado en R usando chunks de memoria",
      "Permite escribir código C++ dentro de R para aceleración de código lento: cppFunction() o archivos .cpp con sourceCpp()",
      "Un generador de bindings automáticos que convierte código R en librerías compartidas llamables desde C++ externo"
    ],
    correct: 2,
    difficulty: "C",
    explanation: "cppFunction('int add(int x, int y) { return x + y; }'). sourceCpp('mi_funcion.cpp'). Los objetos de R se exponen como NumericVector, DataFrame, List. Aceleraciones de 10-100x para loops intensivos."
  },
  {
    question: "¿Qué son los environments en R?",
    options: [
      "Las variables de entorno del sistema operativo que R expone mediante Sys.getenv() para configuración del proceso",
      "Los marcos de la pila de llamadas que R usa internamente para gestionar el scope dinámico de las variables activas",
      "Estructuras con tabla de nombres y puntero al entorno padre; la base del sistema de scoping léxico de R",
      "Configuraciones de sesión de RStudio que persisten entre reinicios y almacenan las preferencias del usuario"
    ],
    correct: 2,
    difficulty: "C",
    explanation: "e <- new.env(). e$x <- 10. ls(e) lista variables. parent.env(e) acceso al padre. globalenv(), baseenv(), emptyenv(). Los closures capturan el entorno donde se crearon. Base de R6 y Reference classes."
  },
  {
    question: "¿Cómo se manejan excepciones en R?",
    options: [
      "try(expresión) captura todos los errores y retorna NULL silenciosamente; es la única forma de manejar errores en R",
      "exception { } catch (e) { } finally { } usando la misma sintaxis de bloques que Java y C# en R moderno",
      "tryCatch(expr, error=function(e){...}, warning=function(w){...}, finally={...}); withCallingHandlers para más control",
      "on.error(función) registra un handler global que captura todos los errores no manejados de la sesión R activa"
    ],
    correct: 2,
    difficulty: "C",
    explanation: "tryCatch({ readLines('noexiste') }, error=function(e) cat('Error:', e$message)). simpleError, simpleWarning son clases. withCallingHandlers permite continuar la ejecución tras el warning/error."
  },
  {
    question: "¿Qué diferencia hay entre S3, S4 y R6 en R?",
    options: [
      "Son tres versiones sucesivas del intérprete R: S3 es R 3.x, S4 es R 4.x, R6 es la versión 6.0 aún en desarrollo",
      "S3 y S4 son sistemas OOP integrados de R (informal vs formal); R6 es un paquete que añade semántica de referencia",
      "Son tres formatos de archivos de R: .rds (S3), .RData (S4) y .r6 (R6) para diferentes tipos de serialización",
      "Son tres librerías estadísticas externas que R usa para análisis: S3 para regresión, S4 para series y R6 para ML"
    ],
    correct: 1,
    difficulty: "B",
    explanation: "S3: dispatch informal con UseMethod(). S4: formal con setClass(), setGeneric(), setMethod(). R5/Reference: mutable por referencia. R6 (paquete): semántica de referencia más limpia que R5, similar a Python."
  },
  {
    question: "¿Qué son los tibbles en R?",
    options: [
      "Objetos inmutables del paquete tibble que representan data.frames sin posibilidad de modificación tras su creación",
      "Versiones mejoradas de data.frame del tidyverse: no convierten strings a factores, no acortan nombres de columnas",
      "Un formato binario comprimido para almacenar data.frames en disco con acceso aleatorio más rápido que .csv",
      "Tablas de base de datos en memoria que tibble genera conectando R directamente con SQLite para consultas rápidas"
    ],
    correct: 1,
    difficulty: "B",
    explanation: "tibble::tibble() o as_tibble(df). Impresión más inteligente: muestra tipos y limita filas/columnas. No hace partial matching de nombres. No convierte strings a factores. Compatible con todos los paquetes tidyverse."
  }
];
