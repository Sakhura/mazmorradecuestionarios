window.questions_haskell = [
  {
    question: "¿Qué paradigma es Haskell?",
    options: [
      "Programación funcional pura con tipado estático fuerte; sin efectos secundarios (salvo IO monad); lazy evaluation",
      "Un lenguaje multi-paradigma que combina orientación a objetos con características funcionales opcionales",
      "Un lenguaje orientado a objetos puro donde todo es un objeto con métodos y estado interno",
      "Un lenguaje imperativo con algunas características funcionales añadidas como funciones de orden superior"
    ],
    correct: 0,
    difficulty: "E",
    explanation: "Haskell es el lenguaje funcional puro más influyente. Cada función es matemáticamente pura: el mismo input siempre da el mismo output."
  },
  {
    question: "¿Qué es la lazy evaluation en Haskell?",
    options: [
      "Las expresiones se evalúan solo cuando su valor es necesario; permite listas infinitas: [1..]",
      "Una estrategia del compilador para diferir optimizaciones hasta el momento del enlazado final",
      "Un modo de evaluación que ralentiza deliberadamente el cómputo para reducir el uso de CPU",
      "Una evaluación que solo aplica a las operaciones de entrada/salida y no al cómputo general"
    ],
    correct: 0,
    difficulty: "E",
    explanation: "take 10 [1..] → [1..10]. Las listas infinitas son posibles porque se evalúan solo los elementos necesarios. GHC puede optimizarlas a fusión de listas."
  },
  {
    question: "¿Qué es el tipo Maybe en Haskell?",
    options: [
      "Un tipo exclusivo para representar strings que podrían estar vacíos o contener texto válido",
      "Un tipo de error que encapsula mensajes de fallo cuando una operación no puede completarse",
      "data Maybe a = Just a | Nothing — alternativa type-safe a null",
      "Un tipo de cómputo diferido que representa un valor que se calculará en el futuro de forma lazy"
    ],
    correct: 2,
    difficulty: "E",
    explanation: "Maybe String puede ser Just 'hola' o Nothing. fmap, >>=, fromMaybe para trabajar con Maybe de forma segura."
  },
  {
    question: "¿Qué es una función pura?",
    options: [
      "Una función puramente matemática que solo opera sobre números reales y complejos en Haskell",
      "Una función que solo puede definirse en el módulo principal y no en módulos auxiliares del proyecto",
      "Una función sin efectos secundarios: el resultado depende solo de los argumentos; la misma entrada siempre da la misma salida",
      "Una función bien estructurada que sigue las convenciones de estilo del proyecto sin imports extra"
    ],
    correct: 2,
    difficulty: "E",
    explanation: "add x y = x + y es pura. readFile no es pura (efecto de IO). La pureza facilita razonamiento, testing y paralelización."
  },
  {
    question: "¿Qué es el sistema de tipos de Haskell?",
    options: [
      "Un sistema de tipado dinámico donde los tipos se resuelven en tiempo de ejecución como en Python",
      "Tipado estático fuerte con inferencia de tipos (Hindley-Milner); el compilador infiere todos los tipos sin anotaciones",
      "Un sistema con solo los tipos primitivos básicos como entero, flotante, booleano y caracter",
      "Un sistema de tipos equivalente al de Java con las mismas capacidades y las mismas limitaciones"
    ],
    correct: 1,
    difficulty: "E",
    explanation: "GHC infiere tipos completamente. Las anotaciones son documentación. El sistema de tipos es tan expresivo que los tipos son documentación y verificación."
  },
  {
    question: "¿Qué es la currificación (currying)?",
    options: [
      "Una técnica culinaria de la gastronomía india que inspiró el nombre del combinador lógico S",
      "Un tipo de recursión mutua donde dos funciones se llaman entre sí con argumentos alternados",
      "Toda función de múltiples argumentos es realmente una función de un argumento que retorna otra función: f a b = (f a) b",
      "Una biblioteca de Haskell para composición de funciones con operadores infijos personalizados"
    ],
    correct: 2,
    difficulty: "E",
    explanation: "add :: Int -> Int -> Int. add 3 :: Int -> Int. add 3 4 = 7. La aplicación parcial es automática y natural en Haskell."
  },
  {
    question: "¿Qué es la recursión en Haskell?",
    options: [
      "Una biblioteca externa de Haskell que debe importarse para habilitar funciones recursivas",
      "Un error de compilación que GHC emite cuando detecta definiciones mutuamente dependientes",
      "El mecanismo principal de iteración (no hay loops); con GHC, la recursión de cola se optimiza",
      "Una característica exclusiva de funciones que operan sobre listas y no aplica a otros tipos"
    ],
    correct: 2,
    difficulty: "E",
    explanation: "factorial 0 = 1; factorial n = n * factorial (n-1). Haskell no tiene loops for/while; toda iteración es recursión o funciones de orden superior."
  },
  {
    question: "¿Qué es un typeclass en Haskell?",
    options: [
      "Define una interfaz de operaciones para tipos: class Eq a where (==) :: a -> a -> Bool",
      "Un mecanismo de herencia entre tipos que permite a uno heredar los métodos del tipo padre",
      "Un módulo de la biblioteca estándar que agrupa tipos relacionados con operaciones comunes",
      "Un tipo de clase OOP que puede instanciarse directamente con valores y tiene estado mutable"
    ],
    correct: 0,
    difficulty: "E",
    explanation: "class Show a where show :: a -> String. instance Show Bool where show True = 'True'; show False = 'False'. Similar a interfaces pero más poderoso."
  },
  {
    question: "¿Qué hace <code>map f xs</code>?",
    options: [
      "Transforma las coordenadas de un punto usando una función de proyección cartográfica",
      "Elimina de la lista los elementos para los que la función predicado retorna False",
      "Crea un diccionario asociando claves de xs con los valores producidos por la función f",
      "Aplica f a cada elemento de xs: map (*2) [1,2,3] = [2,4,6]"
    ],
    correct: 3,
    difficulty: "E",
    explanation: "map :: (a -> b) -> [a] -> [b]. map succ [1,2,3] = [2,3,4]. La operación fundamental sobre listas."
  },
  {
    question: "¿Qué es la composición de funciones <code>(.)</code>?",
    options: [
      "El operador para concatenar dos listas en una sola lista con todos sus elementos combinados",
      "Un operador para acceder a un campo de un registro con su nombre como selector de campo",
      "El operador de módulo para calcular el resto de la división entera entre dos números enteros",
      "(f . g) x = f (g x): combina funciones; (toUpper . head) 'hola' = 'H'"
    ],
    correct: 3,
    difficulty: "E",
    explanation: "process = filter even . map (*2) . take 10. La composición de funciones es fundamental para el estilo point-free en Haskell."
  },
  {
    question: "¿Qué es una Monad en Haskell?",
    options: [
      "Un autómata de estados finitos que procesa secuencias de símbolos en la teoría de lenguajes",
      "Un tipo de función de orden superior que toma y retorna funciones con un único argumento",
      "Typeclass con >>= (bind) y return; encadena cómputos con contexto: IO, Maybe, Either, List, State, Reader",
      "Una clase de matemáticas de álgebra abstracta sin ninguna aplicación en programación práctica"
    ],
    correct: 2,
    difficulty: "D",
    explanation: "do { x <- getLine; putStrLn x } es syntactic sugar sobre getLine >>= \\x -> putStrLn x. Las mónadas estructuran efectos y secuencias de cómputos."
  },
  {
    question: "¿Qué es do notation?",
    options: [
      "Syntactic sugar para encadenamiento monádico: do { x <- action1; action2 x } = action1 >>= \\x -> action2 x",
      "El formato de documentación de Haskell equivalente a Javadoc para generar HTML automáticamente",
      "Una notación exclusiva de la mónada IO que no puede usarse con Maybe, Either u otras mónadas",
      "Un tipo de comentario estructurado que el compilador usa para inferir tipos de las funciones"
    ],
    correct: 0,
    difficulty: "D",
    explanation: "do notation funciona con cualquier Monad. do { x <- maybeValue; y <- otherMaybe; return (x + y) } funciona con Maybe."
  },
  {
    question: "¿Qué es el IO monad?",
    options: [
      "Un módulo de red que encapsula las operaciones de comunicación con servidores externos",
      "Un módulo exclusivo para operaciones de lectura y escritura de archivos en el sistema de archivos",
      "La mónada que encapsula efectos secundarios (IO); mantiene la pureza: IO a representa una acción que produce a",
      "Un tipo de callback registrado para ejecutarse cuando una operación de red completa su resultado"
    ],
    correct: 2,
    difficulty: "D",
    explanation: "main :: IO (). getLine :: IO String. putStrLn :: String -> IO (). Todo IO en Haskell está tipado y acotado en la mónada IO."
  },
  {
    question: "¿Qué es el type inference Hindley-Milner?",
    options: [
      "Un algoritmo de clasificación y ordenación de tipos en jerarquías de herencia del sistema",
      "Un sistema de inferencia que solo puede determinar tipos de expresiones con una única variable",
      "Algoritmo de inferencia de tipos que determina el tipo más general de cualquier expresión sin anotaciones",
      "Una biblioteca de Haskell que provee utilities para manipular y transformar tipos en runtime"
    ],
    correct: 2,
    difficulty: "D",
    explanation: "HM garantiza que los tipos inferidos son los más generales posibles (principally typed). Ningún tipo anotado podría ser más general que el inferido."
  },
  {
    question: "¿Qué es foldr vs foldl?",
    options: [
      "foldl es siempre más eficiente que foldr para cualquier tipo de lista y función acumuladora",
      "foldr: pliega desde la derecha (lazy, funciona con listas infinitas); foldl: desde la izquierda (puede causar space leak sin foldl')",
      "Son equivalentes para funciones asociativas y producen exactamente el mismo resultado siempre",
      "foldr está marcado como obsoleto en GHC moderno y se recomienda usar foldl' en su lugar"
    ],
    correct: 1,
    difficulty: "D",
    explanation: "foldr f z (x:xs) = f x (foldr f z xs). foldl' (strict) es más eficiente que foldl para listas finitas. foldr puede trabajar con listas infinitas por lazy evaluation."
  },
  {
    question: "¿Qué son los algebraic data types (ADT)?",
    options: [
      "data T = Constructor1 | Constructor2 Type1 Type2 — tipos suma y producto; base del sistema de tipos de Haskell",
      "Tipos de datos numéricos que implementan operaciones del álgebra lineal como suma y producto",
      "Estructuras de datos exclusivas para representar expresiones del álgebra simbólica y cálculo",
      "Un sistema de herencia entre tipos que combina características de ambas clases padres en una"
    ],
    correct: 0,
    difficulty: "D",
    explanation: "data Tree a = Leaf | Node a (Tree a) (Tree a). Pattern matching sobre ADTs. Sum types (|) y product types (Constructor con campos) son los bloques de construcción."
  },
  {
    question: "¿Qué son los Functor, Applicative, Monad?",
    options: [
      "Typeclasses que generalizan patrones: Functor (fmap), Applicative (liftA2, <*>), Monad (>>=); jerarquía de abstracción",
      "Una biblioteca externa de Haskell que debe instalarse por separado para programación funcional avanzada",
      "Conceptos puramente matemáticos de la teoría de categorías sin ninguna aplicación en código real",
      "Tipos especiales de listas con restricciones adicionales sobre los elementos que pueden contener"
    ],
    correct: 0,
    difficulty: "C",
    explanation: "Functor: fmap f (Just x) = Just (f x). Applicative: Just (+3) <*> Just 5 = Just 8. Monad: Just 5 >>= \\x -> Just (x+1) = Just 6."
  },
  {
    question: "¿Qué es STM (Software Transactional Memory)?",
    options: [
      "Un tipo de almacenamiento exclusivo para bases de datos relacionales accedidas desde Haskell",
      "Control.Concurrent.STM: transacciones atómicas sobre TVar, composable sin locks; elimina deadlocks",
      "Un tipo de Monad especializado para operaciones de entrada/salida sin efectos secundarios observables",
      "Una biblioteca de red para gestionar conexiones transaccionales a servicios externos distribuidos"
    ],
    correct: 1,
    difficulty: "C",
    explanation: "atomically $ do { balance <- readTVar acc; writeTVar acc (balance + 100) }. Las transacciones STM son compositivas: si dos transacciones son correctas, su combinación también lo es."
  },
  {
    question: "¿Qué es GHC y sus optimizaciones?",
    options: [
      "Glasgow Haskell Compiler: el compilador principal con optimizaciones como fusion, inlining, strictness analysis, LLVM backend",
      "Un intérprete interactivo de Haskell que solo ejecuta código sin generar binarios nativos optimizados",
      "Una versión específica del estándar de Haskell que define las extensiones de lenguaje disponibles",
      "Un compilador disponible únicamente para sistemas Linux que no puede usarse en macOS ni Windows"
    ],
    correct: 0,
    difficulty: "C",
    explanation: "GHC con -O2: stream fusion (map . filter se optimiza a un solo recorrido), inlining agresivo, strictness analysis, worker/wrapper transformation."
  },
  {
    question: "¿Qué es el paralelismo en Haskell con par/pseq?",
    options: [
      "Un mecanismo de paralelismo exclusivo de la mónada IO que no funciona con código puro",
      "Un modelo de multiprocesamiento similar al de Python con un GIL compartido entre los hilos",
      "par: evalúa la expresión en paralelo (spark); pseq: evalúa secuencialmente asegurando orden; Control.Parallel",
      "Una implementación del patrón Fork/Join donde los threads se crean y destruyen manualmente"
    ],
    correct: 2,
    difficulty: "B",
    explanation: "fib n = let a = fib (n-1); b = fib (n-2) in a `par` b `pseq` (a+b). El runtime gestiona sparks en el thread pool. runghc -N para múltiples cores."
  },
  {
    question: "¿Qué es el free monad?",
    options: [
      "Una mónada disponible en la biblioteca estándar que no requiere dependencias externas adicionales",
      "Una mónada sin costo de ejecución que GHC optimiza completamente eliminando toda su estructura",
      "Una mónada incluida gratuitamente con cada typeclass que implementa Functor sin coste adicional",
      "Estructura que permite definir DSLs como mónadas sin implementar la mónada directamente; separar interpretación de descripción"
    ],
    correct: 3,
    difficulty: "A",
    explanation: "Free monad: describe un programa como datos; diferentes intérpretes lo ejecutan de formas distintas (en producción, en test, etc.). Base de arquitecturas efecto-libre."
  },
  {
    question: "¿Qué es el sistema de effectos con extensible effects?",
    options: [
      "Un concepto puramente teórico de la semántica denotacional sin implementación práctica disponible",
      "Una variante simplificada del free monad que solo soporta un efecto activo a la vez sin composición",
      "Alternativas al IO monad que modelan efectos específicos (State, Reader, Writer, Exception) de forma composable y extensible",
      "Una biblioteca de efectos para aplicaciones CSS generativas escritas con Haskell como DSL"
    ],
    correct: 2,
    difficulty: "S",
    explanation: "freer-simple, polysemy: Eff [Reader Config, State Int, IO] retorna tipo con efectos explícitos. Más granular que IO monad, permite razonar sobre qué efectos puede tener una función."
  }
];
