window.questions_r = [
  {
    question: "¿Para qué se usa principalmente R?",
    options: [
      "Programación de sistemas",
      "Desarrollo web",
      "Desarrollo de apps móviles",
      "Análisis estadístico, visualización de datos y computación científica; muy usado en ciencia de datos e investigación"
    ],
    correct: 3,
    difficulty: "E",
    explanation: "R es el lenguaje estándar en estadística, bioinformática, finanzas y ciencias. CRAN tiene más de 20,000 paquetes."
  },
  {
    question: "¿Cómo se asigna una variable en R?",
    options: [
      "var x = 5",
      "x <- 5 (convención) o x = 5",
      "set x = 5",
      "x = 5"
    ],
    correct: 1,
    difficulty: "E",
    explanation: "El operador <- es la convención estándar en R. = también funciona pero tiene diferencias en algunos contextos."
  },
  {
    question: "¿Qué es un vector en R?",
    options: [
      "La estructura de datos básica: secuencia de elementos del mismo tipo; c(1,2,3,4,5)",
      "Una lista de objetos",
      "Un array multidimensional",
      "Una dirección de memoria"
    ],
    correct: 0,
    difficulty: "E",
    explanation: "Todo en R es un vector. c() combina elementos. v[2] accede al segundo elemento (índice base 1 en R)."
  },
  {
    question: "¿Qué hace <code>c()</code>?",
    options: [
      "Crea un carácter",
      "Copia un vector",
      "Crea una columna de dataframe",
      "Combina (concatenate) elementos en un vector: c(1, 2, 3) o c('a', 'b')"
    ],
    correct: 3,
    difficulty: "E",
    explanation: "c() es la función más básica de R para crear vectores. Aplana automáticamente vectores anidados."
  },
  {
    question: "¿Qué es un data.frame?",
    options: [
      "Estructura tabular donde cada columna puede ser de tipo diferente; similar a una tabla de base de datos",
      "Una matriz numérica",
      "Un frame de animación",
      "Un tipo de lista"
    ],
    correct: 0,
    difficulty: "E",
    explanation: "df <- data.frame(nombre=c('Ana','Bob'), edad=c(25,30)). Columnas son vectores. Acceso: df$nombre, df[,1], df[1,]."
  },
  {
    question: "¿Qué hace <code>summary()</code>?",
    options: [
      "Imprime los primeros elementos",
      "Muestra estadísticas descriptivas de un objeto: mínimo, Q1, mediana, media, Q3, máximo para variables numéricas",
      "Lista los atributos",
      "Resume el código"
    ],
    correct: 1,
    difficulty: "E",
    explanation: "summary(df) muestra estadísticas por columna. summary(modelo) muestra resultados del modelo estadístico."
  },
  {
    question: "¿Qué hace <code>library()</code>?",
    options: [
      "Crea una librería propia",
      "Carga un paquete instalado: library(ggplot2)",
      "Instala un paquete",
      "Lista las librerías instaladas"
    ],
    correct: 1,
    difficulty: "E",
    explanation: "library(dplyr). require() es similar pero retorna FALSE si no está instalado. install.packages('dplyr') para instalar."
  },
  {
    question: "¿Qué hace la función <code>mean()</code>?",
    options: [
      "Calcula la desviación estándar",
      "Calcula el promedio aritmético: mean(c(1,2,3,4,5)) = 3",
      "Calcula la mediana",
      "Calcula la moda"
    ],
    correct: 1,
    difficulty: "E",
    explanation: "mean(x, na.rm=TRUE) calcula la media ignorando NA. sd() para desviación estándar, median() para mediana."
  },
  {
    question: "¿Qué es NA en R?",
    options: [
      "Es igual a NULL",
      "Un tipo de error",
      "Not Available: representa valor faltante; diferente de NULL, NaN, Inf",
      "Not Applicable"
    ],
    correct: 2,
    difficulty: "E",
    explanation: "NA es para valores faltantes en datos. is.na(x) detecta NAs. na.rm=TRUE en funciones como mean() ignora NAs."
  },
  {
    question: "¿Qué hace <code>which()</code>?",
    options: [
      "Filtra un vector",
      "Aplica una función",
      "Pregunta algo",
      "Retorna los índices donde una condición es TRUE: which(x > 5)"
    ],
    correct: 3,
    difficulty: "E",
    explanation: "which(c(1,5,3,7,2) > 3) retorna c(2,4) (índices donde el valor > 3)."
  },
  {
    question: "¿Qué es ggplot2?",
    options: [
      "Una extensión de Excel",
      "Sistema de visualización basado en Grammar of Graphics: capas de geometrías, estéticas, escalas y facetas",
      "Una base de datos gráfica",
      "Un tipo de gráfico especial"
    ],
    correct: 1,
    difficulty: "D",
    explanation: "ggplot(data, aes(x=año, y=valor)) + geom_line() + theme_minimal(). La filosofía de capas hace los gráficos muy personalizables."
  },
  {
    question: "¿Qué hace el operador pipe <code>%>%</code> de magrittr/dplyr?",
    options: [
      "Encadena operaciones: df %>% filter(edad>18) %>% select(nombre, edad) %>% arrange(nombre)",
      "Modulo de división",
      "Es la multiplicación matricial",
      "Es un operador de porcentaje"
    ],
    correct: 0,
    difficulty: "D",
    explanation: "El pipe envía el resultado de la izquierda como primer argumento de la derecha. R 4.1+ tiene |> nativo."
  },
  {
    question: "¿Qué hace <code>dplyr::filter()</code>?",
    options: [
      "Ordena el dataframe",
      "Filtra columnas",
      "Filtra filas según condición: filter(df, edad >= 18 & activo == TRUE)",
      "Selecciona columnas"
    ],
    correct: 2,
    difficulty: "D",
    explanation: "filter() de dplyr filtra filas. select() elige columnas. mutate() crea/modifica columnas. group_by() + summarise() para agregaciones."
  },
  {
    question: "¿Qué hace <code>apply()</code>?",
    options: [
      "Aplica reglas CSS",
      "Es igual que map()",
      "Solo para vectores",
      "Aplica función a filas (1) o columnas (2) de una matriz: apply(mat, 2, mean)"
    ],
    correct: 3,
    difficulty: "D",
    explanation: "apply(matrix, MARGIN, FUN). MARGIN=1 por filas, 2 por columnas. lapply() para listas retorna lista. sapply() simplifica el resultado."
  },
  {
    question: "¿Qué es el tidyverse?",
    options: [
      "Un tipo de base de datos",
      "Un universo de datos tidy",
      "Colección de paquetes para ciencia de datos con filosofía coherente: ggplot2, dplyr, tidyr, readr, purrr, tibble",
      "Un framework de R"
    ],
    correct: 2,
    difficulty: "D",
    explanation: "install.packages('tidyverse') instala el conjunto. Sigue principios tidy data: cada observación en una fila, cada variable en una columna."
  },
  {
    question: "¿Qué hace <code>tidyr::pivot_longer()</code>?",
    options: [
      "Solo ordena columnas",
      "Hace el dataframe más largo en bytes",
      "Convierte de formato wide a long: varias columnas de valores → una columna de nombres y una de valores",
      "Transpone el dataframe"
    ],
    correct: 2,
    difficulty: "D",
    explanation: "df %>% pivot_longer(cols = c(Q1, Q2, Q3), names_to = 'quarter', values_to = 'sales'). Esencial para datos tidy."
  },
  {
    question: "¿Qué son las listas en R?",
    options: [
      "Dataframes especiales",
      "Colecciones que pueden contener elementos de tipos diferentes e incluso otras listas: list(1, 'hola', TRUE, c(1,2))",
      "Arrays multidimensionales",
      "Igual que vectores"
    ],
    correct: 1,
    difficulty: "D",
    explanation: "lista$nombre o lista[['nombre']] accede por nombre. lista[[1]] por índice. Retorno natural de muchas funciones de modelado."
  },
  {
    question: "¿Qué hace <code>lm()</code>?",
    options: [
      "Limita un valor",
      "Ajusta un modelo lineal: modelo <- lm(y ~ x1 + x2, data=df)",
      "Lee un modelo guardado",
      "Lista modelos"
    ],
    correct: 1,
    difficulty: "D",
    explanation: "lm(mpg ~ wt + hp, data=mtcars). summary(modelo) muestra coeficientes, R², p-values. predict(modelo, newdata) para predicciones."
  },
  {
    question: "¿Qué hace <code>str()</code>?",
    options: [
      "Concatena strings",
      "Muestra la estructura interna de un objeto: tipos de variables, dimensiones, primeros valores",
      "Lista los atributos",
      "Convierte a string"
    ],
    correct: 1,
    difficulty: "D",
    explanation: "str(df) muestra: 'data.frame': 100 obs. of 3 variables: $ nombre: chr... $ edad: int... Esencial para exploración de datos."
  },
  {
    question: "¿Qué es purrr en R?",
    options: [
      "Un gato en R",
      "Un tipo de for loop",
      "Solo para listas",
      "Paquete para programación funcional con map(), map2(), pmap(); reemplaza apply family con interfaz más consistente"
    ],
    correct: 3,
    difficulty: "D",
    explanation: "map(lista, función) retorna lista. map_dbl() retorna double. map2() con dos listas. pmap() con lista de listas. Más predecible que apply."
  },
  {
    question: "¿Qué es Shiny en R?",
    options: [
      "Framework para crear aplicaciones web interactivas directamente desde R sin HTML/CSS/JS conocimiento",
      "Un paquete de gráficos",
      "Un tipo de visualización estática",
      "Un servidor web en R"
    ],
    correct: 0,
    difficulty: "C",
    explanation: "Shiny: ui.R define la interfaz, server.R la lógica reactiva. renderPlot(), renderTable() para outputs. input$slider para inputs."
  },
  {
    question: "¿Qué es la evaluación perezosa (lazy evaluation) en R?",
    options: [
      "Un tipo de caché",
      "Solo para promesas",
      "Los argumentos de funciones no se evalúan hasta que se necesitan; permite argumentos que dependen de otros",
      "R es lento"
    ],
    correct: 2,
    difficulty: "C",
    explanation: "R usa lazy evaluation para argumentos de función. missing() verifica si un argumento fue proporcionado. Permite valores por defecto que referencian otros parámetros."
  },
  {
    question: "¿Qué es Rcpp?",
    options: [
      "Permite escribir funciones en C++ llamadas desde R; dramáticamente más rápido para loops intensivos",
      "Un tipo de paquete",
      "El compilador de R",
      "Una copia de R"
    ],
    correct: 0,
    difficulty: "C",
    explanation: "cppFunction('int add(int x, int y) { return x + y; }') compila y registra la función C++. Para loops donde R es demasiado lento."
  },
  {
    question: "¿Qué es el sistema de environments en R?",
    options: [
      "Espacios de nombres de variables; la búsqueda sigue la cadena: local → enclosing → global → base",
      "Los paquetes cargados",
      "Variables de entorno del OS",
      "Solo el global environment"
    ],
    correct: 0,
    difficulty: "C",
    explanation: "environment(f) retorna el environment de la función. parent.env() sube en la cadena. Las closures en R capturan su environment de definición."
  },
  {
    question: "¿Qué hace <code>tryCatch()</code>?",
    options: [
      "Manejo de errores: tryCatch({ código }, error=function(e) { handle }, warning=function(w) { handle })",
      "Es igual que try()",
      "Solo captura errores fatales",
      "Atrapa ratones"
    ],
    correct: 0,
    difficulty: "C",
    explanation: "tryCatch({ read.csv('no_existe.csv') }, error = function(e) { message('Error: ', e$message); NULL }). withCallingHandlers() para handlers no-locales."
  },
  {
    question: "¿Qué es S3, S4 y R5 (Reference Classes)?",
    options: [
      "Versiones de R",
      "Versiones de RStudio",
      "Sistemas OOP de R: S3 (informal, dispatch por tipo), S4 (formal, validación), R5/R6 (reference semantics, mutabilidad)",
      "Tipos de vectores"
    ],
    correct: 2,
    difficulty: "B",
    explanation: "S3: class(x) <- 'MiClase'; UseMethod('mi_funcion'). S4: setClass(), setGeneric(), setMethod(). R6 (paquete): classes con estado mutable."
  },
  {
    question: "¿Qué son los tibbles en R?",
    options: [
      "Solo una versión rápida de data.frame",
      "Una mascota de R",
      "Un tipo de gráfico",
      "Dataframes modernos de tidyverse: impresión más limpia, no convierten strings a factores, subsetting más estricto"
    ],
    correct: 3,
    difficulty: "B",
    explanation: "tibble::tibble() crea tibbles. as_tibble(df) convierte. Muestran solo 10 filas. [] siempre retorna tibble. [[]] y $ retornan vector."
  }
];
